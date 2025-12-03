export const serviceapi = {
  getCharacters: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com");
    const data = await res.json();
    console.log('Object =>', data);


    const products = data.map((prod) => ({
      id: prod.id,
      name: prod.title,
      username: prod.username,
      email: prod.email,

    }));
   


    return products;
  },
};
