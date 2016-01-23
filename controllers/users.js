var Student   = require('../models/user.js')
var passport  = require('passport')

// Mentors
// GET /mentors/signup
function getMentorSignup(request, response) {
  response.render('students/signup.ejs', { message: request.flash('signupMessage') });
}

// POST /mentors/signup
function postMentorSignup(request, response) {
  console.log(request.params)

  var signUpStrategy = passport.authenticate('local-signup', {
    successRedirect : '/', 
    failureRedirect : '/signup', 
    failureFlash : true 
  });

  return signUpStrategy(request, response) 
}

// GET /mentors/login
function getMentorLogin(request, response) { 
  response.render('students/login.ejs', { message: request.flash('loginMessage') }); 
}

// POST /mentors/login 
function postMentorLogin(request, response) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/', 
    failureRedirect : '/login', 
    failureFlash : true 
  });

  return loginProperty(request, response);
}

// GET /mentors/logout
function getMentorLogout(request, response) {
  request.logout();
  response.redirect('/');
}

// GET /mentors
function getMentorIndex(request, response) {

}

// GET /mentors/:id
function getMentorProfile(request, response) {

}

// GET /mentors/edit
function getMentorEdit(request, response) {

}

// PATCH mentors
function patchMentorProfile(request, response) {

}

// DELETE mentors
function deleteMentorProfile(request, response) {

}

// Students
// GET students/signup
function getStudentSignup(request, response) {
  response.render('mentors/signup.ejs', { message: request.flash('signupMessage') });
}

// POST students/signup
function postStudentSignup(request, response) {
  console.log(request.params)

  var signUpStrategy = passport.authenticate('local-signup', {
    successRedirect : '/', 
    failureRedirect : '/signup', 
    failureFlash : true 
  });

  return signUpStrategy(request, response) 
}

// GET students/login
function getStudentLogin(request, response) { 
  response.render('mentors/login.ejs', { message: request.flash('loginMessage') }); 
}

// POST students/login 
function postStudentLogin(request, response) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/', 
    failureRedirect : '/login', 
    failureFlash : true 
  });

  return loginProperty(request, response);
}

// GET students/logout
function getStudentLogout(request, response) {
  request.logout();
  response.redirect('/');
}

// GET /students
function getIndex(request, response) {

}

// GET /students/:id
function getStudentProfile(request, response) {

}

// GET /students/edit
function getStudentEdit(request, response) {

}

// PATCH student
function patchStudentProfile(request, response) {

}

// DELETE student
function deleteStudentProfile(request, response) {

}

module.exports = {
  getMentorLogin: getMentorLogin,
  postMentorLogin: postMentorLogin ,
  getMentorSignup: getMentorSignup,
  postMentorSignup: postMentorSignup,
  getMentorLogout: getMentorLogout,
  getMentorIndex: getMentorIndex,
  getMentorProfile: getMentorProfile,
  getMentorEdit: getMentorEdit,
  patchMentorProfile: patchMentorProfile,
  deleteMentorProfile: deleteMentorProfile,

  getStudentLogin: getStudentLogin,
  postStudentLogin: postStudentLogin ,
  getStudentSignup: getStudentSignup,
  postStudentSignup: postStudentSignup,
  getStudentLogout: getStudentLogout,
  getStudentProfile: getStudentProfile,
  getStudentEdit: getStudentEdit,
  patchStudentProfile: patchStudentProfile,
  deleteStudentProfile: deleteStudentProfile,
}