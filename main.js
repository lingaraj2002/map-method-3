const users3 = [
		  {
			first_name: 'Mike',
			location: 'London'
		  },
		  {
			first_name: 'Tim',
			location: 'US'
		  },
		  {
			first_name: 'John',
			location: 'Australia'
		  }
		];

		   
		let result = users3.map(function(val){
			return `${val.first_name} lives in ${val.location}`;

		   });
		   
		 console.log(result);