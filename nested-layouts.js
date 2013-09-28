if (Meteor.isClient) {
  Router.map(function () {
    this.route('dashboard', {
      path: '/dashboard'
    });

    this.route('dynamo', {
      path: '/dashboard/dynamo'
    });
  });

  DashboardController = RouteController.extend({
    template: 'dashboard'
  });

  DynamoController = DashboardController.extend({
    run: function () {
      this.render();

      this.render({
        dynamo: {to: 'dashboard-dynamic'}
      });
    }
  });
}
