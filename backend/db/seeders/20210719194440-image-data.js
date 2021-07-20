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
        {listingId: 7, createdAt: new Date(), updatedAt: new Date(), url: 'https://locations-api-production.imgix.net/locations/image/035bac02-23db-11e8-86b9-1202be33576a/20161101_Manhattan_Laundry_Common_Areas-30.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506'},
        {listingId: 7, createdAt: new Date(), updatedAt: new Date(), url: 'https://locations-api-production.imgix.net/locations/image/03ca3f0a-23db-11e8-86b9-1202be33576a/20161102_11_John_Street-4.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506'},
        {listingId: 7, createdAt: new Date(), updatedAt: new Date(), url: 'https://locations-api-production.imgix.net/locations/image/04627b80-23db-11e8-86b9-1202be33576a/1.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506'},
        {listingId: 7, createdAt: new Date(), updatedAt: new Date(), url: 'https://locations-api-production.imgix.net/locations/image/04c88e34-23db-11e8-86b9-1202be33576a/3.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506'},
        {listingId: 7, createdAt: new Date(), updatedAt: new Date(), url: 'https://locations-api-production.imgix.net/locations/image/04948e4a-23db-11e8-86b9-1202be33576a/2.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506'},
        {listingId: 8, createdAt: new Date(), updatedAt: new Date(), url: 'https://locations-api-production.imgix.net/locations/image/9d775ec0-a6fe-11e8-804e-1202be33576a/sO0YdRGA.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506'},
        {listingId: 8, createdAt: new Date(), updatedAt: new Date(), url: 'https://locations-api-production.imgix.net/locations/image/9d8cf848-a6fe-11e8-804e-1202be33576a/TsE2qTPA.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506'},
        {listingId: 8, createdAt: new Date(), updatedAt: new Date(), url: 'https://locations-api-production.imgix.net/locations/image/9da7f846-a6fe-11e8-804e-1202be33576a/nO0UeZJQ.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506'},
        {listingId: 8, createdAt: new Date(), updatedAt: new Date(), url: 'https://locations-api-production.imgix.net/locations/image/9b5008e0-a6fe-11e8-859d-1202be33576a/lTq2VTPg.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506'},
        {listingId: 9, createdAt: new Date(), updatedAt: new Date(), url: 'https://locations-api-production.imgix.net/locations/image/732bae94-45cf-11e9-8c82-0ec6db7d2a3c/20181127_WeWork_Na%C3%A7%C3%B5es_Unidas_12901__Berrini__-_Front_Desk_-_Wide-2.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506'},
        {listingId: 9, createdAt: new Date(), updatedAt: new Date(), url: 'https://locations-api-production.imgix.net/locations/image/73b4aafa-45cf-11e9-8c82-0ec6db7d2a3c/20181127_WeWork_Na%C3%A7%C3%B5es_Unidas_12901__Berrini__-_Kitchen_-_Wide-2.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506'},
        {listingId: 9, createdAt: new Date(), updatedAt: new Date(), url: 'https://locations-api-production.imgix.net/locations/image/741c6ff0-45cf-11e9-8c82-0ec6db7d2a3c/20181127_WeWork_Na%C3%A7%C3%B5es_Unidas_12901__Berrini__-_Common_Areas_-_Work_Nook-1.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506'},
        {listingId: 10, createdAt: new Date(), updatedAt: new Date(), url: 'https://locations-api-production.imgix.net/locations/image/02de98ba-485b-11ea-a642-1214a1ac73cf/Web_72DPI-20190705_WeWork_Guadalajara_002.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506'},
        {listingId: 10, createdAt: new Date(), updatedAt: new Date(), url: 'https://locations-api-production.imgix.net/locations/image/03444868-485b-11ea-a642-1214a1ac73cf/Web_72DPI-20190430_WeWork_Leading_Center_-_Kitchen-1.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506'},
        {listingId: 10, createdAt: new Date(), updatedAt: new Date(), url: 'https://locations-api-production.imgix.net/locations/image/039b35f6-485b-11ea-a642-1214a1ac73cf/Web_72DPI-2019_Meeting_Room_08_822_v2.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506'},
        {listingId: 10, createdAt: new Date(), updatedAt: new Date(), url: 'https://locations-api-production.imgix.net/locations/image/03e16a62-485b-11ea-a642-1214a1ac73cf/2._20180828_WeWork_Platina_Tower_-_Common_Area_-_Wide-Atrium-1.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506'},
        {listingId: 10, createdAt: new Date(), updatedAt: new Date(), url: 'https://locations-api-production.imgix.net/locations/image/04a649e0-485b-11ea-a642-1214a1ac73cf/5._20180131_WeWork_Aldwych_House_-_Phone_Booths-1.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506'},
        {listingId: 11, createdAt: new Date(), updatedAt: new Date(), url: 'https://locations-api-production.imgix.net/locations/image/48be5006-d32f-11e9-9ff8-0a80a47aa582/Web_150DPI-20190821_WeWork_HeliosSeelinger155_RioDeJaneiro_001.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506'},
        {listingId: 11, createdAt: new Date(), updatedAt: new Date(), url: 'https://locations-api-production.imgix.net/locations/image/493564e8-d32f-11e9-9ff8-0a80a47aa582/Web_150DPI-20190827_WeWork_HeliosSeelinger155_RioDeJaneiro_018.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506'},
        {listingId: 11, createdAt: new Date(), updatedAt: new Date(), url: 'https://locations-api-production.imgix.net/locations/image/49540880-d32f-11e9-9ff8-0a80a47aa582/Web_150DPI-20190827_WeWork_HeliosSeelinger155_RioDeJaneiro_008.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506'},
        {listingId: 11, createdAt: new Date(), updatedAt: new Date(), url: 'https://locations-api-production.imgix.net/locations/image/ab4d0d34-d32f-11e9-8fe0-0a80a47aa582/Web_150DPI-20190827_WeWork_HeliosSeelinger155_RioDeJaneiro_014.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506'},
      ]);
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
