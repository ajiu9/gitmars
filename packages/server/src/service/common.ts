// import { execSync } from 'child_process'
import { v4 as uuidv4 } from 'uuid'
import db from '../db'

function addProject({ name, path }) {
    return new Promise((resolve, reject) => {
        const id = uuidv4()
        try {
            db.get('projects').push({ id, name, path }).write()
        } catch (err) {
            reject(err)
        }
        resolve(true)
    })
}

function checkProject({ path }) {
    return new Promise((resolve, reject) => {
        let code = sh.test('-e', `${path}/.git`) ? 0 : 1
        try {
            if (code === 0 && db.get('projects').find({ path }).value()) {
                code = 2
            }
        } catch (err) {
            reject(err)
        }
        resolve(code)
    })
}

function delProject({ id }) {
    return new Promise((resolve, reject) => {
        try {
            db.get('projects').remove({ id }).write()
        } catch (err) {
            reject(err)
        }
        resolve(true)
    })
}

function getProjectList({ id }) {
    return new Promise((resolve, reject) => {
        let list = []
        try {
            if (id) {
                list = db.get('projects').find({ id }).value()
            } else {
                list = db.get('projects').value() || []
            }
        } catch (err) {
            reject(err)
        }
        resolve(list)
    })
}

function updateProject({ id, name, path }) {
    return new Promise((resolve, reject) => {
        try {
            db.get('projects').find({ id }).assign({ name, path }).write()
        } catch (err) {
            reject(err)
        }
        resolve(true)
    })
}

export default {
    addProject,
    checkProject,
    delProject,
    getProjectList,
    updateProject
}