#!/usr/bin/env node

import { cp, lstat, mkdir, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const args = process.argv.slice(2);

function printUsage() {
  console.log(`Usage:
  plei-agent-skills install [--skill <name>] [--force] [--codex-home <path>]

Options:
  --skill <name>          Skill to install: plei-rails (default), plei-git, or all
  --force                 Replace existing installation(s) of the selected skill(s)
  --codex-home <path>     Install under this Codex home directory
  --help                  Show this help`);
}

function getOptionValue(name) {
  const index = args.indexOf(name);
  if (index === -1) return undefined;
  const value = args[index + 1];
  if (!value || value.startsWith("--")) {
    throw new Error(`Expected a value after ${name}`);
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
  const selectedSkill = getOptionValue("--skill") || "plei-rails";
  const availableSkills = ["plei-rails", "plei-git"];
  if (![...availableSkills, "all"].includes(selectedSkill)) {
    throw new Error(
      `Unknown skill: ${selectedSkill}. Choose plei-rails, plei-git, or all.`,
    );
  }
  const skillNames = selectedSkill === "all" ? availableSkills : [selectedSkill];

  const codexHome = path.resolve(
    getOptionValue("--codex-home") ||
      process.env.CODEX_HOME ||
      path.join(os.homedir(), ".codex"),
  );
  const skillsDirectory = path.join(codexHome, "skills");
  const force = args.includes("--force");

  for (const skillName of skillNames) {
    const skillSource = path.join(packageRoot, "skills", skillName);
    if (!(await pathExists(path.join(skillSource, "SKILL.md")))) {
      throw new Error(`The bundled ${skillName} skill is missing its SKILL.md file.`);
    }
  }

  const destinations = skillNames.map((skillName) => ({
    name: skillName,
    path: path.join(skillsDirectory, skillName),
  }));
  const existingDestinations = [];
  for (const destination of destinations) {
    if (await pathExists(destination.path)) existingDestinations.push(destination);
  }

  if (existingDestinations.length && !force) {
    const paths = existingDestinations.map(({ path: target }) => target).join(", ");
    throw new Error(`Skill installation already exists at ${paths}. Use --force to replace it.`);
  }

  for (const destination of existingDestinations) {
    await rm(destination.path, { recursive: true, force: true });
  }

  await mkdir(skillsDirectory, { recursive: true });
  for (const destination of destinations) {
    const skillSource = path.join(packageRoot, "skills", destination.name);
    await cp(skillSource, destination.path, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
    console.log(`Installed ${destination.name} to ${destination.path}`);
  }
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
  console.error(`plei-agent-skills: ${error.message}`);
  process.exitCode = 1;
});
