import * as taskRepository from '../repositories/taskRepository.js';

export async function getAllTasks(completed) {
  return taskRepository.findAll(completed);
}

export async function createTask(data) {
  return taskRepository.create(data);
}