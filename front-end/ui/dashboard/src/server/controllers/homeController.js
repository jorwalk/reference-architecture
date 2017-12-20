module.exports = {
    getHome : function(req, res){
      const variables = {
        title: 'Home',
        site_title: 'Sample Dashboard',
        template: 'cosmo'
      }

      res.render('home', variables)
    }
}
