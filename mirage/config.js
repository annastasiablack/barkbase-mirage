export default function() {
  this.namespace = 'api';

  this.get('/dogs', 'dog');

  this.get('/dogs/:id', (schema, request) => {
    let id = request.params.id;
    return schema.dog.find(id);
  });

  this.post('/dogs', 'dog');

  this.put('/dogs/:id');

  this.patch('/dogs/:id', 'dog');

  this.del('/dogs/:id', 'dog');
}
