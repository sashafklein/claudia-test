const pr = (request, context) => {
  console.log(request);
  console.log(context);
  return request.body;
};

export default pr;
