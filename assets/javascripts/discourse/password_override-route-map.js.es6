export default {
    resource: 'admin.adminPlugins',
    path: '/plugins',
    map(){
	this.route('password_override');
    }
};
