var DATA = "%data%", bio = {
	name : "Harshul Routhu",
	role : "Software Developer",
	contacts : [ {
		mobile : "(+1)703-980-7847",
		email : "harshulr@gmail.com | hrouthu@ku.edu",
		Github : "harshulr",
		Linkedin : "www.linkedin.com/in/harshulr",
		location : "Lawrence, KS"
	} ],
	welcomeMessage : "I have done my Master's in Computer Science at University of Kansas. During my master's, I have worked for Intouch Solutions as Application Development Intern and University of Kansas as Student Developer.",
	biopic : "images/me.jpg",
	skills : [ "Java", "MySQL", "ASP.NET MVC",
			"PHP", "JavaScript", "MS Access",
			"HTML", "CSS", "Git", "TFS", "MS Visual Studio", "WAMP", "Responsive Email Templates", "Android Development", "XML", "Android Studio", "Mobile Development" ],
	display : function() {
		var a = HTMLheaderName.replace(DATA, bio.name), b = HTMLheaderRole
				.replace(DATA, bio.role), c = HTMLbioPic.replace(DATA,
				bio.biopic), d = HTMLwelcomeMsg.replace(DATA,
				bio.welcomeMessage);
		$("#header").prepend(b).prepend(a).append(c, d), $("#header").append(
				HTMLskillsStart);
		var e = HTMLskills.replace(DATA, bio.skills.join(" ,  ") + " .");
		$("#skills").append(e);
		for ( var f in bio.contacts) {
			var g = HTMLmobile.replace(DATA, bio.contacts[f].mobile), h = HTMLemail
					.replace(DATA, bio.contacts[f].email), i = HTMLgithub
					.replace(DATA, bio.contacts[f].Github), j = HTMLlocation
					.replace(DATA, bio.contacts[f].location), k = HTMLtwitter
					.replace(DATA, bio.contacts[f].Twitter);
			$("#topContacts").append(g, h, i, j), $("#footerContacts")
					.append(g, h, i, j)
		}
	}
}, education = {
	schools : [ {
		name : "University of Kansas",
		location : "Lawrence, KS, USA",
		degree : "Masters",
		majors : "Computer Science",
		dates : 2016,
		url : "http://eecs.ku.edu/"
	}, {
		name : "Koneru Lakshmaiah University",
		location : "Vijayawada, AP, India",
		degree : "Bachelors",
		majors : "Computer Science",
		dates : 2014,
		url : "http://www.kluniversity.in/cse/default.aspx"
	} ],
	
	display : function() {
		for ( var a in education.schools) {
			$("#education").append(HTMLschoolStart);
			var b = HTMLschoolName.replace(DATA, education.schools[a].name), c = HTMLschoolDegree
					.replace(DATA, education.schools[a].degree), d = HTMLschoolDates
					.replace(DATA, education.schools[a].dates), e = HTMLschoolLocation
					.replace(DATA, education.schools[a].location), f = HTMLschoolMajor
					.replace(DATA, education.schools[a].majors);
			$(".education-entry:last").append(b + c, d, e, f), $(
					".education-entry:last").children("a").attr("href",
					education.schools[a].url)
		}
	}
}, work = {
	jobs : [
			{
                employer : "University of Kansas",
                title : "Full Stack Web Developer",
                url : "https://websupport.ku.edu/harshul-routhu",
                dates : "September 2016 - Present",
                location : "1425 Jayhawk Blvd, Lawrence, KS 66045",
                description : "Working on site migration from PHP to PHP Symfony3. Developed a Java Spring Boot app with Thymeleaf template and  PostgreSQL. Maintaining applications in Java and PHP for KU Libraries. Using GIT for version controlling and JIRA for projects and issues tracking. Additional skills - Bootstrap, XSLT, Docker, Puppet."
            },
			{
				employer : "University of Kansas",
				title : "Student Developer",
				url : "https://odst.ku.edu/",
				dates : "September 2015 - June 2016",
				location : "1200 Sunnyside Avenue, 1002 Haworth Hall, Lawrence, KS",
				description : "Developed and Maintained KU-ODST application components. Updated and generated reports from MS Access database. Migrated MS Access database to MySQL database. Skills - PHP Symfony, GIT, WAMP, MySQL, MS Access."
			},
			{
				employer : "Intouch Solutions",
				title : "Application Development Intern",
				url : "http://www.intouchsol.com/",
				dates : "June 2015 - August 2015",
				location : "7045 College Blvd. Suite 300, Overland Park, KS",
				description : "Migrated a website from ASP.NET webforms to ASP.NET MVC framework. Developed web applications using ASP.NET MVC framework. Build responsive emails for a client as a part of pro-bono project. " +
						"Technologies: ASP.NET MVC, MySQL, TFS, JavaScript, HTML, CSS, MS Visual Studio"
			} ],
	display : function() {
		for ( var a in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var b = HTMLworkEmployer.replace(DATA, work.jobs[a].employer), c = HTMLworkTitle
					.replace(DATA, work.jobs[a].title), d = HTMLworkDates
					.replace(DATA, work.jobs[a].dates), e = HTMLworkDescription
					.replace(DATA, work.jobs[a].description);
			$(".work-entry:last").append(b + c, d, e), $(".work-entry:last")
					.children("a").attr("href", work.jobs[a].url)
		}
	}
}, projects = {
	project : [
			{
				title : "Android Apps",
				dates : "June 2016",
				url : "https://github.com/harshulr",
				description : "Developed a Connect4 and FlappyBird game using Android Studio. Link to the apps Connect4 - https://github.com/harshulr/Connect4, FlappyBird - https://github.com/harshulr/flappyBird",
				images : [ "images/linespace.PNG" ]
			},
			{
				title : "Search Engine",
				dates : "Feb 2016 - May 2016",
				url : "",
				description : "Basic search engine built using concepts of cosine similarity, term proximity and relevance feedback. Query and document similarity is computed and documents with higher similarity are given as result. Developed using Java",
				images : [ "images/linespace.PNG" ]
			},
			{
				title : "Comparison of two decision tree generating algorithms: C4.5 and CART based on testing datasets with missing attribute values",
				dates : "Jan 2016 - May 2016",
				url : "",
				description : "Performance was carried on C4.5R8 and SPM CART. Comparative analysis is carried out in terms of training and testing accuracies and complexity (size and depth) of the decision tree generated. Wilcoxon test was done to determine statistical significance of the results on both the algorithms",
				images : ["images/linespace.PNG"]
			},
			{
				title : "Online Shopping Cart",
				dates : "Feb 2015 - May 2015",
				url : "",
				description : "E-commerce application for buying products based on departments. Developed using PHP and MySQL",
				images : [ "images/linespace.PNG" ]
			},
			{
				title : "Toxicity Prediction of Chemicals",
				dates : "September 2014 - December 2014",
				url : "",
				description : "Conducted experiments using different machine lerning algorithms. Build odels and evaluated relative performance of the algorithms. Used Weka tool to conduct experiments",
				images : [ "images/linespace.PNG" ]
			},
			{
				title : "Intrusion Detection using Classification",
				dates : "Jan 2014 - May 2014",
				url : "",
				description : "Build models to detect attacks on the inter-connected network with 97% accuracy. Used C4.5 algorithm to generate the model from existing knowledge base of attacks",
				images : [ "images/linespace.PNG" ]
			}],
	display : function() {
		for ( var a in projects.project) {
			$("#projects").append(HTMLprojectStart);
			var b = HTMLprojectTitle.replace(DATA, projects.project[a].title), c = HTMLprojectDates
					.replace(DATA, projects.project[a].dates), d = HTMLprojectDescription
					.replace(DATA, projects.project[a].description);
			if ($(".project-entry:last").append(b, c, d), $(
					".project-entry:last").children("a").attr("href",
					projects.project[a].url),
					0 !== projects.project[a].images.length)
				for ( var e in projects.project[a].images) {
					var f = HTMLprojectImage.replace(DATA,
							projects.project[a].images[e]);
					$(".project-entry:last").append(f)
				}
			else
				$(".project-entry:last").append(HTMLprojectNoImage)
		}
	}
};
$(document).click(function(a) {
	a.pageX, a.pageY
}), bio.display(), work.display(), education.display(), projects.display(), $(
		"#main"), $("#mapDiv").append(googleMap);
