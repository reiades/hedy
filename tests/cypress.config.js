const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6y9x8a',
  watchForFileChanges: false,
  video: false,
  e2e: {
    baseUrl: 'http://localhost:8080',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    landing_page: '/landing-page',
    login_page: '/login',
    recover_page: '/recover',
    hedy_page: '/hedy',
    teachers_page: '/for-teachers',
    customize_class_page: '/for-teachers/customize-class/', // You should concatenate this with the class id e.g. /for-teachers/customize_class/<class id>
    stats_page: '/stats/class/', // You should concatenate this with the class id e.g. /stats/class/<class id>
    logs_page: '/logs/class/', // You should concatenate this with the class id e.g. /logs/class/<class id>
    register_student_page: '/signup?teacher=false',
    register_teacher_page: '/signup?teacher=true'
  }
});
