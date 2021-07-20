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
      return queryInterface.bulkInsert('Images', [
        {listingId: 2, createdAt: new Date(), updatedAt: new Date(), url: 'https://work-in-app.s3.amazonaws.com/listing-2/1485-Bay-Shore-Blvd-San-Francisco-CA-attachment-2-1-Large.jpg'},
        {listingId: 2, createdAt: new Date(), updatedAt: new Date(), url: 'https://work-in-app.s3.amazonaws.com/listing-2/1485-Bay-Shore-Blvd-San-Francisco-CA-Bayshore-Blvd-3-LargeHighDefinition.jpg'},
        {listingId: 2, createdAt: new Date(), updatedAt: new Date(), url: 'https://work-in-app.s3.amazonaws.com/listing-2/1485-Bay-Shore-Blvd-San-Francisco-CA-Cafe-5-LargeHighDefinition.jpg'},
        {listingId: 2, createdAt: new Date(), updatedAt: new Date(), url: 'https://work-in-app.s3.amazonaws.com/listing-2/1485-Bay-Shore-Blvd-San-Francisco-CA-Cafe-6-LargeHighDefinition.jpg'},
        {listingId: 2, createdAt: new Date(), updatedAt: new Date(), url: 'https://work-in-app.s3.amazonaws.com/listing-2/1485-Bay-Shore-Blvd-San-Francisco-CA-Cafe2-14-LargeHighDefinition.jpg'},
        {listingId: 2, createdAt: new Date(), updatedAt: new Date(), url: 'https://work-in-app.s3.amazonaws.com/listing-2/1485-Bay-Shore-Blvd-San-Francisco-CA-Conference-Room-7-LargeHighDefinition.jpg'},
        {listingId: 2, createdAt: new Date(), updatedAt: new Date(), url: 'https://work-in-app.s3.amazonaws.com/listing-2/1485-Bay-Shore-Blvd-San-Francisco-CA-Entrance-2-LargeHighDefinition.jpg'},
        {listingId: 2, createdAt: new Date(), updatedAt: new Date(), url: 'https://work-in-app.s3.amazonaws.com/listing-2/1485-Bay-Shore-Blvd-San-Francisco-CA-Main-Lobby3-13-LargeHighDefinition.jpg'},
        {listingId: 2, createdAt: new Date(), updatedAt: new Date(), url: 'https://work-in-app.s3.amazonaws.com/listing-2/1485-Bay-Shore-Blvd-San-Francisco-CA-Restrooms-8-LargeHighDefinition.jpg'},
        {listingId: 3, createdAt: new Date(), updatedAt: new Date(), url: 'https://work-in-app.s3.amazonaws.com/listing-1/415-Mission-St-San-Francisco-CA-Designed-for-Efficiency-Collaboration-and-Productivity-2-LargeHighDefinition.jpg'},
        {listingId: 3, createdAt: new Date(), updatedAt: new Date(), url: 'https://work-in-app.s3.amazonaws.com/listing-1/415-Mission-St-San-Francisco-CA-Designed-for-Efficiency-Collaboration-and-Productivity-4-LargeHighDefinition.jpg'},
        {listingId: 3, createdAt: new Date(), updatedAt: new Date(), url: 'https://work-in-app.s3.amazonaws.com/listing-1/415-Mission-St-San-Francisco-CA-Interior-Photo-5-LargeHighDefinition.jpg'},
        {listingId: 3, createdAt: new Date(), updatedAt: new Date(), url: 'https://work-in-app.s3.amazonaws.com/listing-1/415-Mission-St-San-Francisco-CA-Lobby-3-LargeHighDefinition.jpg'},
        {listingId: 3, createdAt: new Date(), updatedAt: new Date(), url: 'https://work-in-app.s3.amazonaws.com/listing-1/415-Mission-St-San-Francisco-CA-Premier-CoWorking-Options-in-the-Tallest-Building-in-San-Francisco-1-Large.jpg'},
        {listingId: 3, createdAt: new Date(), updatedAt: new Date(), url: 'https://work-in-app.s3.amazonaws.com/listing-1/415-Mission-St-San-Francisco-CA-Premier-CoWorking-Options-in-the-Tallest-Building-in-San-Francisco-6-LargeHighDefinition.jpg'},
        {listingId: 3, createdAt: new Date(), updatedAt: new Date(), url: 'https://work-in-app.s3.amazonaws.com/listing-1/415-Mission-St-San-Francisco-CA-Premier-CoWorking-Options-in-the-Tallest-Building-in-San-Francisco-7-LargeHighDefinition.jpg'},
        {listingId: 3, createdAt: new Date(), updatedAt: new Date(), url: 'https://work-in-app.s3.amazonaws.com/listing-1/415-Mission-St-San-Francisco-CA-Premier-CoWorking-Options-in-the-Tallest-Building-in-San-Francisco-8-LargeHighDefinition.jpg'},
        {listingId: 3, createdAt: new Date(), updatedAt: new Date(), url: 'https://work-in-app.s3.amazonaws.com/listing-1/415-Mission-St-San-Francisco-CA-Premier-CoWorking-Options-in-the-Tallest-Building-in-San-Francisco-9-LargeHighDefinition.jpg'},
        {listingId: 4, createdAt: new Date(), updatedAt: new Date(), url: 'https://images1.loopnet.com/i2/zdfx4N8FwR-zV_oiDLVcCmFXi2xjtqDmuIHPItSuyyw/116/825-Third-Ave-New-York-NY-825Third-Skyline-1-LargeHighDefinition.jpg'},
        {listingId: 4, createdAt: new Date(), updatedAt: new Date(), url: 'https://images1.loopnet.com/i2/82fE7r8iLYjzRtooTkHHBCoVAZaJ9ay4G-_EDprCxTI/116/825-Third-Ave-New-York-NY-825-Third-Entrance-2-LargeHighDefinition.jpg'},
        {listingId: 4, createdAt: new Date(), updatedAt: new Date(), url: 'https://images1.loopnet.com/i2/7nXFN_KkSWOd59AG9_-nAC8lez6w16aftM-QhY1zA3s/116/825-Third-Ave-New-York-NY-825-Third-Lobby-3-LargeHighDefinition.jpg'},
        {listingId: 4, createdAt: new Date(), updatedAt: new Date(), url: 'https://images1.loopnet.com/i2/PEZVokdaRt-QeW9hFWvHWMBMAiwilnBQM759zPBj8v8/116/825-Third-Ave-New-York-NY-825-Third-Wraparound-Terrace-4-LargeHighDefinition.jpg'},
        {listingId: 4, createdAt: new Date(), updatedAt: new Date(), url: 'https://images1.loopnet.com/i2/y7_2i2MwggCS7Eg03MuiJhy5iETsSKTH45MGumEI8EM/116/825-Third-Ave-New-York-NY-825-Third-Top-of-House-Office-5-LargeHighDefinition.jpg'},
        {listingId: 4, createdAt: new Date(), updatedAt: new Date(), url: 'https://images1.loopnet.com/i2/dUePkmV1REsaGlr7eM2g04IguJdU6nbTIkan11Gr618/116/825-Third-Ave-New-York-NY-825-Third-Top-of-House-Conference-6-LargeHighDefinition.jpg'},
        {listingId: 4, createdAt: new Date(), updatedAt: new Date(), url: 'https://images1.loopnet.com/i2/7yhQmK8OGumbJxxkgVQU90Tiol9mQRRDax4X-vLovyk/116/825-Third-Ave-New-York-NY-825-Third-Top-of-House-Lounge-7-LargeHighDefinition.jpg'},
        {listingId: 5, createdAt: new Date(), updatedAt: new Date(), url: 'https://images1.loopnet.com/i2/sMf_GyOQGEc3Nbvn5tts4THohjKj2JoyWlwJqaeQSZQ/116/71-W-23rd-St-New-York-NY-At-the-Corner-of-W-23rd-St-and-6th-Ave-1-LargeHighDefinition.jpg'},
        {listingId: 5, createdAt: new Date(), updatedAt: new Date(), url: 'https://images1.loopnet.com/i2/Dz0OnXhtobk3vNYYytrjAf3QPF2DaAOemhJloctyi3A/116/71-W-23rd-St-New-York-NY-23rd-Street-Lobby-5-LargeHighDefinition.jpg'},
        {listingId: 5, createdAt: new Date(), updatedAt: new Date(), url: 'https://images1.loopnet.com/i2/7QhOJnUifRz8VKvDoaSzi7NUwkUnKTPzj0peIaCgEKw/116/71-W-23rd-St-New-York-NY-23rd-Street-Lobby-6-LargeHighDefinition.jpg'},
        {listingId: 5, createdAt: new Date(), updatedAt: new Date(), url: 'https://images1.loopnet.com/i2/GTMuoU6MQ3Lc0w5ZcSSs-d37Lx8YhKrUnS1uCbjOUT0/116/71-W-23rd-St-New-York-NY-24th-Street-Lobby-7-LargeHighDefinition.jpg'},
        {listingId: 5, createdAt: new Date(), updatedAt: new Date(), url: 'https://images1.loopnet.com/i2/ntGOacyIZbA7ZzF-nkIPmMx7J02Kem7cB1ykT7cfLLs/116/71-W-23rd-St-New-York-NY-Hollender-Room-12-LargeHighDefinition.jpg'},
        {listingId: 5, createdAt: new Date(), updatedAt: new Date(), url: 'https://images1.loopnet.com/i2/MTmfd4dtbgHawBZpITO-9vRulb3yiaD4Y7yK_ReJHCQ/116/71-W-23rd-St-New-York-NY-Meeting-Rooms-15-LargeHighDefinition.jpg'},
        {listingId: 6, createdAt: new Date(), updatedAt: new Date(), url: 'https://images1.loopnet.com/i2/ZBVuo7yp_3fKmujkdSB6DWKlK0HISrkc3lgy03gKp4w/116/1245-Broadway-New-York-NY-Exterior-1-LargeHighDefinition.jpg'},
        {listingId: 6, createdAt: new Date(), updatedAt: new Date(), url: 'https://images1.loopnet.com/i2/us1cTuQ3zQBDmxRi9kFkqW4GC8RaEI9t616SfWbHaRg/116/1245-Broadway-New-York-NY-Exterior-2-LargeHighDefinition.jpg'},
        {listingId: 6, createdAt: new Date(), updatedAt: new Date(), url: 'https://images1.loopnet.com/i2/PU9UHwaK2U0WDah3QhZ2TVV2ffBDCz6_UUsg3pwH6B4/116/1245-Broadway-New-York-NY-Lower-Exterior-3-LargeHighDefinition.jpg'},
      ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Images', null, {});
  }
};
