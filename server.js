import Express from 'express';
import {graphql} from 'graphql';
import bodyParser from 'body-parser';
import schema from './schema.js';


let app = Express();

app.use(bodyParser.text({ type: 'application/graphql' }));

app.get('/graphql', (req, res) => {
  graphql(schema, req.body)
  .then((result) => {
    res.send(JSON.stringify(result));
  });
});

app.post('/graphql', (req, res) => {
  console.log(req.body);
  graphql(schema, req.body)
  .then((result) => {
    res.send(JSON.stringify(result, null, 2));
  });
});

app.listen(1982, () => {
  console.log('graphql server running');
});
