// by Amira Almurayshid//
///////////first object/////////
var bio = {
  name: "Amira Almurayshid",
  role: "Front-end Developer",
  contacts: {
    mobile: "0552477625",
    email: "amibr88@gmail.com",
    github: "amibr88",
    twitter: "iaialm",
    location: "Riyadh",
  },
  welcomeMessage: "Welcome to my online Resume  ",
  skills: [" SQL ", " PL/SQL ", " HTML ", " CSS ", " JS ", " Tableau"],
  biopic: "images/lisa.jpg",
  //biopic: "/Users.amira.Desktop.test-rep-master.frontend-nanodegree-resume.images.lisa.jpg",
  display: function() {
    "use strict";
    var newname = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(newname);

    var newrole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(newrole);

    var newmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(newmobile);

    var newemail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(newemail);

    var newtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(newtwitter);

    var newgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(newgithub);

    var newlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(newlocation);

    var newMSG = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(newMSG);



    //var skillsstart= HTMLskillsStart.replace("%data%",bio.skills);
    $("#header").append(HTMLskillsStart);

    var newskills = HTMLskills.replace("%data%", bio.skills);
    $("#skills").append(newskills);

    var newbiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(newbiopic);

  }
};

bio.display();




///////////second object//////////

var education = {
  schools: [

    {
      name: "MONASH university",
      location: "Melbourne,Australia",
      degree: "Bachelor",
      majors: ["Information Technology & Systems"],
      dates: "2014-2017",
    },
    {
      name: "TVTC",
      location: "Riyadh,Saudi Arabia",
      degree: "Diploma",
      majors: ["Technical Support"],
      dates: "2009-2011",
    }
  ],

  onlineCourses: [

    {

      title: "Graphic Design",
      school: "Show Academy",
      dates: "2016",
      url: "http://www.shawacademy.com/"
    },

    {

      title: "Front-End devlopment",
      school: "Udacity",
      dates: "2017",
      url: "https://www.udacity.com/"
    },

    {

      title: "HR management online",
      school: "Drob & SEU",
      dates: "2017",
      url: "https://www.doroob.sa/ar//"
    },
    {

      title: "Leadership skills and supervision management ",
      school: "Drob & SEU",
      dates: "2017",
      url: "https://www.doroob.sa/ar//"
    },
    {

      title: "E-Commerce ",
      school: "Drob & SEU",
      dates: "2017",
      url: "https://www.doroob.sa/ar//"
    }

  ],

  display: function() {
    //"use strict";

    for (var i = 0; i < education.schools.length; i++) {

      //
      $("#education").append(HTMLschoolStart);

      var schoolname = HTMLschoolName.replace("%data%", education.schools[i].name);
      $(".education-entry:last").append(schoolname);

      var newdscegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      $(".education-entry:last").append(newdscegree);


      var newdate = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      $(".education-entry:last").append(newdate);

      var newlscocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      $(".education-entry:last").append(newlscocation);

      var newmajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
      $(".education-entry:last").append(newmajor);
    }



    $("#education").append(HTMLonlineClasses);

    for (var i = 0; i < education.onlineCourses.length; i++) {
      $("#education").append(HTMLschoolStart);

      var newtitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);

      $(".education-entry:last").append(newtitle);

      var newonlineschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
      $(".education-entry:last").append(newonlineschool);

      var newonlinedate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
      $(".education-entry:last").append(newonlinedate);

      var onlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
      $(".education-entry:last").append(onlineUrl);

    }
  }
};

education.display();


console.log(googleMap);
$("#mapDiv").append(googleMap);

//////////third object////////

var work = {
  jobs: [{

    employer: "string",
    title: "string",
    location: "string",
    dates: "2011/2012",
    description: "string",
  }],
  display: function() {
    "use strict";
    

    for (var j = 0; j < work.jobs.length; j++) {
$("#work").append(HTMLworkStart);
      var newemployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
      $(".work-entry:last").append(newemployer);
      var worktitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
      $(".work-entry:last").append(worktitle);
      var worklocation = HTMLworkDates.replace("%data%", work.jobs[j].location);
      $(".work-entry:last").append(worklocation);
      var workdate = HTMLworkLocation.replace("%data%", work.jobs[j].dates);
      $(".work-entry:last").append(workdate);
      var workDescription = HTMLworkDescription.replace("%data%", work.jobs[j].description);
      $(".work-entry:last").append(workDescription);

    }
  }
};

work.display();

///////////object 4 /////////


var projects = {
  projects: [{
    title: "Website",
    dates: "2016/2017",
    description: "I worked with a group of 4 to bould a website for Unified fright management. the website aims to illustrates unifid fright services in australia and to make it easy for the new costomers to contact the owner David by using contact form , as well as making it ewwasy for david to manage inquiries in the admin dashboard.the all website was developed by Cackephp",
    images: ["http://lorempixel.com/400/200/abstract/1/", "http://lorempixel.com/400/200/abstract/1/"]

  }],

  display: function() {
    "use strict";

    for (var i = 0; i < projects.projects.length; i++) {
      $("#projects").append(HTMLprojectStart);

      $("#project-entry:last").append(HTMLprojectStart);

      var projecttitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
      $(".project-entry:last").append(projecttitle);

      var projectdates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      $("project-entry:last").append(projectdates);

      var projectdescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
      $(".project-entry:last").append(projectdescription);

      // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
      // use a loop in a loop/ nested loop
      // to format and append project images here

    }
  }
};

projects.display();