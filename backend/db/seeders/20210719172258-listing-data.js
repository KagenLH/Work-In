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
