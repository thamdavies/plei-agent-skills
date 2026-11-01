#!/usr/bin/env node

import { cp, lstat, mkdir, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const skillSource = path.join(packageRoot, "skills", "plei-rails");
const args = process.argv.slice(2);

function printUsage() {
  console.log(`Usage:
  plei-rails install [--force] [--codex-home <path>]

Options:
  --force                 Replace an existing plei-rails skill installation
  --codex-home <path>     Install under this Codex home directory
  --help                  Show this help`);
}

function getOptionValue(name) {
  const index = args.indexOf(name);
  if (index === -1) return undefined;
  const value = args[index + 1];
  if (!value || value.startsWith("--")) {
    throw new Error(`Expected a path after ${name}`);
  }
  return value;
}

async function pathExists(target) {
  try {
    await lstat(target);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") return false;
    throw error;
  }
}

async function install() {
  const codexHome = path.resolve(
    getOptionValue("--codex-home") ||
      process.env.CODEX_HOME ||
      path.join(os.homedir(), ".codex"),
  );
  const destination = path.join(codexHome, "skills", "plei-rails");
  const force = args.includes("--force");

  if (!(await pathExists(path.join(skillSource, "SKILL.md")))) {
    throw new Error("The bundled skill is missing its SKILL.md file.");
  }

  if (await pathExists(destination)) {
    if (!force) {
      throw new Error(
        `Skill already exists at ${destination}. Use --force to replace it.`,
      );
    }
    await rm(destination, { recursive: true, force: true });
  }

  await mkdir(path.dirname(destination), { recursive: true });
  await cp(skillSource, destination, {
    recursive: true,
    errorOnExist: true,
    force: false,
  });
  console.log(`Installed plei-rails to ${destination}`);
}

async function main() {
  if (args.includes("--help") || args.length === 0) {
    printUsage();
    return;
  }

  const command = args[0];
  if (command !== "install") {
    printUsage();
    throw new Error(`Unknown command: ${command}`);
  }

  await install();
}

main().catch((error) => {
  console.error(`plei-rails: ${error.message}`);
  process.exitCode = 1;
});
