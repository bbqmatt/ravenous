//client ID : dBDNhT3QrMk0AkD-qa_hhw

//you need the fetch() polyfill package to ensure support for older browers.
//install by running: npm install whatwg-fetch --save

//also using the CORS anywhere API to get around the CORS issues
//https://cors-anywhere.herokuapp.com/

const apiKey = 'Q4amXLyjeFZ8wzZK304AX7UIuR1Kw3MqW43NRdbPDSOOC_nGBKso1s8lWZ6BN51jX0WBFyo6FNzmY1qq-nj8nxEEOGm5SEZjYqOA5caRhBLpG95f23ZW7FoB9dcxW3Yx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;
