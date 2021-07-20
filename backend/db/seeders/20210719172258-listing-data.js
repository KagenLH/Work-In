'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Listings', [
        {userId: 1, name: 'Salesforce Tower', address:'415 Mission St', city: 'San Francisco', state: 'CA', country: 'USA', price: 25, createdAt: new Date(), updatedAt: new Date(),
         description: `Thoughtfully designed coworking and office space across 3 floors in the tallest building on the West Coast, with full floor opportunities available.`},
         {userId: 1, name: 'Bayshore Business Center', address:'1485 Bay Shore Blvd', city: 'San Francisco', state: 'CA', country: 'USA', price: 15, createdAt: new Date(), updatedAt: new Date(),
         description: `Our business center is an asset to the San Francisco community and neighborhood. All offices are inclusive, private spaces with utilities and janitorial service include. We have an On-site Cafe with full restaurant service, catering, delivery, and to-go items. Receptionists are available Monday-Friday from 8 AM to 5 PM. 24-hour access to all tenants, full use of space, private and ample restrooms, conference rooms, door signage, etc. Contact us today for more details! Visit our website www.bayshorebusinesscenter.com/`},
         {userId: 1, name: '825 Third Ave', address:'845 Third Ave', city: 'New York', state: 'NY', country: 'USA', price: 32, createdAt: new Date(), updatedAt: new Date(),
         description: `825 Third Avenue is being thoroughly reimagined through a $150 million capital improvement program focusing on performance, tenant comfort, modern aesthetics and operational efficiency. MEP systems, windows, building infrastructure, and retail storefronts are being replaced or substantially upgraded. Significant renovations also include a new lobby, state-ofthe-art amenity center and wraparound terrace opportunity on the 12th floor.`},
         {userId: 2, name: 'Masonic Hall', address:'71 W 23rd St', city: 'New York', state: 'NY', country: 'USA', price: 38, createdAt: new Date(), updatedAt: new Date(),
         description: `Strategically situated at the corner of 6th and 23rd Streets, the Masonic Hall at 71 W 23rd Street presents the opportunity for space in one of Manhattan’s most popular neighborhoods. The 19-story, 453,600 square-foot property offers panoramic views and plenty of windows for abundant natural light. The renovated and well-kept lobby is attended around the clock and provides a welcoming environment for employees and guests alike. Tenants also enjoy access to on-site event space and conference center, which can be rented for business uses. This desirable location is just one block from Madison Square Park and is surrounded by an abundance of fine dining, quick-service restaurants, upscale hospitality options, and neighborhood amenities. Commuters enjoy immediate access to the 23rd Street Station, which serves the PATH train and the yellow, blue, F, and M lines. And for even more options, the iconic Penn Station is less than a mile’s walk away.`},
         {userId: 2, name: '1245 Broadway', address:'1245 Broadway', city: 'New York', state: 'NY', country: 'USA', price: 10, createdAt: new Date(), updatedAt: new Date(),
         description: `1245 Broadway is the NoMad neighborhood's first boutique trophy office property. Inspired by Manhattan's classical 19th- and 20th-century architecture, yet asserting a distinctly contemporary presence, the newly constructed building is both contextual and unique. Eco-conscious, Class A design and construction features enhance comfort, optimize energy efficiency, and contribute to a more sustainable corporate environment. Experience exterior and interior lighting that reaches museum-quality excellence, a marble-walled lobby, a luxurious double-height arcade with premier dining, and a private club-inspired tenant-exclusive lounge complete with a refreshment bar, private phone booths, a gas fireplace, and wood-paneled walls. Rising to 23 stories, 1245 Broadway offers a range of iconic Manhattan skyline views, including the Chrysler and Empire State buildings, from massive picture windows with triple-glazed glass. Flexible and open office floor plans with 11' to 13'6" finished ceiling heights can be configured to accommodate an efficient mix of shared workspaces, meeting rooms, conference rooms, and private offices.`},
         {userId: 1, name: 'Sergipe 1440', address:'Rua Sergipe, 1440', city: 'Belo Horizonte', state: 'MG', country: 'Brazil', price: 5, createdAt: new Date(), updatedAt: new Date(),
         description: `Located in the commercial birthplace of Belo Horizonte, This vibrant workspace at Savassi is bursting with innovation and opportunity. With six floors of attractive lounges, private offices and high-tech meeting rooms, this dog-friendly venue accommodates teams of all sizes. With a variety of bus lines serving the site, travel is made easy with lines 1170, 2151, 4106, SCO2A and SE02. In addition, we have an on-site bike rack and convenient parking options nearby. After working hours, welcome your customers or celebrate the team's achievements at world-renowned restaurants in the neighborhood. If you intend to rent an office near Praça da Savassi, this is the ideal place to be.`},
         {userId: 1, name: 'Boulevard Shopping', address:'Avenida dos Andradas, 3000 Boulevard Shopping', city: 'Belo Horizonte', state: 'MG', country: 'Brazil', price: 7, createdAt: new Date(), updatedAt: new Date(),
         description: `Perfectly positioned on one of the city's main avenues, this coworking space on Av. dos Andradas offers a thriving environment for your business. Spanning four floors of a historic tower, this space is designed to keep your staff productive and inspired. Enter through Boulevard Shopping, take the elevator to the ninth floor and join a world of workspaces, with refreshing common areas, stylish private offices and expansive meeting rooms. Make your commute to work easier using the nearby Santa Efigênia subway station and bus lines 4801A, 9032, 9205 and 9411 in front of the building. Additionally, there is an on-site bicycle rack for cyclists. Need a break between tasks? Is easy. Explore the various shops in the building or take a trip to Santa Tereza. It doesn't matter if your company has one employee or a thousand, you'll feel right at home in Boulevard Shopping's work and coworking spaces. Book a visit right now.`},
         {userId: 3, name: 'Nações Unidas 12901', address:'Av. das Nações Unidas, 12901 CENU Torre Norte, Brooklin Paulista', city: 'São Paulo', state: 'SP', country: 'Brazil', price: 12, createdAt: new Date(), updatedAt: new Date(),
         description: `With Views of the Pinheiros River, This Shared Office Space at the United Nations, 12901 features art-filled lounges and energizing communal spaces, allowing both teams and individuals to feel inspired and productive. This coworking space in Brooklyn is steps away from a bus stop for convenient public transportation, as well as the Tower Bridge business center. Teams can bond over a number of buffet-style restaurants within minutes of the United Nations at lunch, or catch a happy hour and live music with colleagues or clients at the nearby Caluma Buffet and Restaurant. Ready to see how this shared office space in Zona Sul can inspire your team? Schedule a visit to rent office space in Brooklin Sao Paulo at Nações Unidas, 12901 today.`},
         {userId: 2, name: 'Faria Lima 3729', address:'Praça senador Salgado Filho 1 - Centro', city: 'São Paulo', state: 'SP', country: 'Brazil', price: 13, createdAt: new Date(), updatedAt: new Date(),
         description: `A beautiful and practical workspace situated directly in the heart of Sao Paulo.`},
         {userId: 1, name: 'Helios Seelinger 155', address:'Rua Helios Seelinger, 155', city: 'Rio de Janeiro', state: 'RJ', country: 'Brazil', price: 6, createdAt: new Date(), updatedAt: new Date(),
         description: `Between sand, surf and fully stocked printing stations, our coworking space in Barra da Tijuca is a professional paradise. With four floors and exclusive terrace access, this modern venue is filled with amenities to help businesses of all sizes thrive. Your team has access to inviting lounge areas, high-tech meeting rooms and stocked kitchens throughout our space. Hosting a variety of businesses across multiple industries, this lively neighborhood is home to a wealth of dining, shopping and nightlife options that provide entertainment for every occasion. Transportation to the site is very convenient, with the Jardim Oceânico metro station just a few minutes' walk away and parking is available nearby. Are you ready to re-imagine your workday amidst the stunning natural beauty of the Jardim Oceânico? Schedule a visit right now.`},
      ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
     return queryInterface.bulkDelete('Listings', null, {});
  }
};
