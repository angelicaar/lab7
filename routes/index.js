var projects = require('../projects.json');

/*
 * GET home page.
 */
exports.view = function(request, response){
	projects['viewAlt']=false;
  	response.render('index', projects);
};
exports.viewAlt = function(request, response){
	projects['viewAlt']=true;
  	response.render('index', projects);
};
// exports.view = function(req, res){
// 	data['viewAlt']=false;
//   	response.render('index', data);
// };

// exports.viewAlt = function(rew,res){
// 	data['viewAlt']=true;
// 	res.render('index',data);
// }

