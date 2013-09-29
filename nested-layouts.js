if (Meteor.isClient) {
  Router.map(function () {
    this.route('dashboard', {
      path: '/dashboard'
    });

    this.route('dynamo', {
      path: '/dashboard/dynamo',
        controller:"DashboardController",
        yieldTemplates: {
            'dynamo': {to: 'dashboard-dynamic'}
        }
    });
  });

  DashboardController = RouteController.extend({
    template: 'dashboard',
      run:function ()  {
          this.render();
      }
  });

 /* DynamoController = DashboardController.extend({
    run: function () {
      this.render();

      this.render({
        dynamo: {to: 'dashboard-dynamic'}
      });
    }
  });*/
}



/* 
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

*/
