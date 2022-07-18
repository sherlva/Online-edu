module.exports = {
    async  login(req, res) {
        res.render('admin/login', {
            title: 'Login page',
            layout: '../admin/layouts/auth'
        })
    },
    async register(req,res ){
        res.render('admin/register', {
            title: 'Register page',
            layout: '../admin/layouts/auth'
        })
    }
}