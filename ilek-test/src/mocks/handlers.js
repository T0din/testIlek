import { rest } from 'msw';

const fakeProducts = [{"name":"Château ZZZ 2022","type":"blanc","winery":"Château ZZZ","appellation":"Entre-deux-mers","vintage":2022,"ratings":[94,90,92],"average_rating":92,"price":10.5},{"name":"Château XXX 2020","type":"rouge","winery":"Château XXX","appellation":"Haut-Médoc","vintage":2020,"ratings":[90,91,92],"average_rating":91,"price":11.9},{"name":"Château YYY 2021","type":"rosé","winery":"Château YYY","appellation":"Côte de Provence","vintage":2021,"ratings":[89,91],"average_rating":90,"price":9.9}];

export const handlers = [
  rest.get('http://0.0.0.0:5005/wines', (req, res, ctx) => {
    // Simulate a successful response with mock data
    return res(
      ctx.status(200),
      ctx.json([...fakeProducts] )
    );
  }),
];