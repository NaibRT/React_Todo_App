import React,{createContext,Component} from 'react'
export const companyContext=createContext();


class CompanyContext extends Component {
  constructor(props) {
    super(props)
    this.state={
      Company:{},
      sectors:[],
      areas:[],
      distrincts:[],
      cities:[],
      countries:[],
      employeeCounts:[]

     };
  }



  
  // --------------------------about_company onchange events
  directorOnChangeHandler=(e)=>{
    let dir=e.currentTarget.value
    this.setState((prevState)=>({
      Company:{
        ...prevState.Company,
         director:dir
      },

      sectors:[...prevState.sectors],
      areas:[...prevState.areas],
      distrincts:[...prevState.distrincts],
      cities:prevState.cities,
      countries:[...prevState.countries],
      employeeCounts:prevState.employeeCounts
    }));
  }

  bdayOnChangeHandler=(e)=>{
     let value=e.currentTarget.value
    this.setState((prevState)=>({
      Company:{
        ...prevState.Company,
        birthDay:value
      },

      sectors:[...prevState.sectors],
      areas:[...prevState.areas],
      distrincts:[...prevState.distrincts],
      cities:prevState.cities,
      countries:[...prevState.countries],
      employeeCounts:prevState.employeeCounts
    }));
  
  }

  voenOnChangeHandler=(e)=>{
    let value=e.currentTarget.value
    this.setState((prevState)=>({
      Company:{
        ...prevState.Company,
        voen:value
      },

      sectors:[...prevState.sectors],
      areas:[...prevState.areas],
      distrincts:[...prevState.distrincts],
      cities:prevState.cities,
      countries:[...prevState.countries],
      employeeCounts:prevState.employeeCounts
    }));
  }

  phoneOnChangeHandler=(e)=>{
    let value=e.currentTarget.value
    this.setState((prevState)=>({
      Company:{
        ...prevState.Company,
        phone:value
      },

      sectors:[...prevState.sectors],
      areas:[...prevState.areas],
      distrincts:[...prevState.distrincts],
      cities:prevState.cities,
      countries:[...prevState.countries],
      employeeCounts:prevState.employeeCounts
    }));
   }

   districtOnChangeHandler=(e)=>{
    let value=e.currentTarget.value
    console.log(value)
    this.setState((prevState)=>({
      Company:{
        ...prevState.Company,
        district:value
      },

      sectors:[...prevState.sectors],
      areas:[...prevState.areas],
      distrincts:[...prevState.distrincts],
      cities:prevState.cities,
      countries:[...prevState.countries],
      employeeCounts:prevState.employeeCounts
    }));
   }

  createdDayOnChangeHandler=(e)=>{
    let value=e.currentTarget.value
    this.setState((prevState)=>({
      Company:{
        ...prevState.Company,
        createdDate:value
      },

      sectors:[...prevState.sectors],
      areas:[...prevState.areas],
      distrincts:[...prevState.distrincts],
      cities:prevState.cities,
      countries:[...prevState.countries],
      employeeCounts:prevState.employeeCounts
    }));
    }

  siteOnChangeHandler=(e)=>{
    let value=e.currentTarget.value
    this.setState((prevState)=>({
      Company:{
        ...prevState.Company,
        site:value
      },

      sectors:[...prevState.sectors],
      areas:[...prevState.areas],
      distrincts:[...prevState.distrincts],
      cities:prevState.cities,
      countries:[...prevState.countries],
      employeeCounts:prevState.employeeCounts
    }));
  
  }

  emailOnChangeHandler=(e)=>{console.log(e.currentTarget.value)
    let value=e.currentTarget.value
    this.setState((prevState)=>({
      Company:{
        ...prevState.Company,
        email:value
      },

      sectors:[...prevState.sectors],
      areas:[...prevState.areas],
      distrincts:[...prevState.distrincts],
      cities:prevState.cities,
      countries:[...prevState.countries],
      employeeCounts:prevState.employeeCounts
    }));
  
  }

  cityOnChangeHandler=(e)=>{
    let value=e.currentTarget.value
    this.setState((prevState)=>({
      Company:{
        ...prevState.Company,
        city:value
      },

      sectors:[...prevState.sectors],
      areas:[...prevState.areas],
      distrincts:[...prevState.distrincts],
      cities:prevState.cities,
      countries:[...prevState.countries],
      employeeCounts:prevState.employeeCounts
    }));
  
  }

// ---------------------------activities_inform onchange events

employeeCountOnChangeHandler=(e)=>{
  let value=e.currentTarget.value
  this.setState((prevState)=>({
    Company:{
      ...prevState.Company,
      employeeCount:value
    },

    sectors:[...prevState.sectors],
    areas:[...prevState.areas],
    distrincts:[...prevState.distrincts],
    cities:prevState.cities,
    countries:[...prevState.countries],
    employeeCounts:prevState.employeeCounts
  }));
}

productOnChangeHandler=(e)=>{
  let value=e.currentTarget.value
  this.setState((prevState)=>({
    Company:{
      ...prevState.Company,
      usedProduct:value
    },

    sectors:[...prevState.sectors],
    areas:[...prevState.areas],
    distrincts:[...prevState.distrincts],
    cities:prevState.cities,
    countries:[...prevState.countries],
    employeeCounts:prevState.employeeCounts
  }));
}

cerificateOnChangeHandler=(e)=>{
  let value=e.currentTarget.value
  this.setState((prevState)=>({
    Company:{
      ...prevState.Company,
      certificate:value
    },

    sectors:[...prevState.sectors],
    areas:[...prevState.areas],
    distrincts:[...prevState.distrincts],
    cities:prevState.cities,
    countries:[...prevState.countries],
    employeeCounts:prevState.employeeCounts
  }));

}

exportCountryOnChangeHandler=(e)=>{
  let value=e.currentTarget.value
    this.setState((prevState)=>({
      Company:{
        ...prevState.Company,
        exportCountry:value
      },
      sectors:[...prevState.sectors],
      areas:[...prevState.areas],
      distrincts:[...prevState.distrincts],
      cities:prevState.cities,
      countries:[...prevState.countries],
      employeeCounts:prevState.employeeCounts
    }));
}

brancOnChangeHandler=(e)=>{
  let value=e.currentTarget.value
    this.setState((prevState)=>({
      Company:{
        ...prevState.Company,
        branch:value
      },

      sectors:[...prevState.sectors],
      areas:[...prevState.areas],
      distrincts:[...prevState.distrincts],
      cities:prevState.cities,
      countries:[...prevState.countries],
      employeeCounts:prevState.employeeCounts
    }));
}

importOnChangeHandler=(e)=>{
  let value=e.currentTarget.value
  this.setState((prevState)=>({
    Company:{
      ...prevState.Company,
      importCountry:value
    },
    sectors:[...prevState.sectors],
    areas:[...prevState.areas],
    distrincts:[...prevState.distrincts],
    cities:prevState.cities,
    countries:[...prevState.countries],
    employeeCounts:prevState.employeeCounts
  }));
}

delegateOnChangeHandler=(e)=>{
  let value=e.currentTarget.value
  this.setState((prevState)=>({
    Company:{
      ...prevState.Company,
      delegate:value
    },

    sectors:[...prevState.sectors],
    areas:[...prevState.areas],
    distrincts:[...prevState.distrincts],
    cities:prevState.cities,
    countries:[...prevState.countries],
    employeeCounts:prevState.employeeCounts
  }));
}


detailOnChangeHandler=(e)=>{
  console.log(e.currentTarget.value);
   let value=e.currentTarget.value;
    let id=e.currentTarget.id;
    let areasList=this.state.areas;
    areasList.forEach(x=>{
      if(x.id===id){
        x.detail=value;
      }
    });
    this.setState((prevState)=>({
      Company:{...prevState.Company},
      sectors:[...prevState.sectors],
      areas:areasList,
      distrincts:[...prevState.distrincts],
      cities:[...prevState.cities],
      countries:[...prevState.countries],
      employeeCounts:[...prevState.employeeCounts]
    }));
}

sectorOnChangeHandler=(e)=>{
  console.log(e.currentTarget)
  // this.setState((prevState)=>({
  //   Company:{
  //     ...prevState.Company,
  //     branch:value
  //   },

  //   sectors:[...prevState.sectors],
  //   areas:[...prevState.areas],
  //   distrincts:[...prevState.distrincts],
  //   cities:prevState.cities,
  //   countries:[...prevState.countries],
  //   employeeCounts:prevState.employeeCounts
  // }));
}



  UpdateonClickHandler=(e)=>{
    console.log(this.state.Company)
    fetch('http://localhost:9597/updateCompany', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(
        {Company:this.state.Company,
          sectors:this.state.sectors,
          areas:this.state.areas,
          employeeCounts:this.state.employeeCounts})
    }).then(async (res)=>{
      let result= await res.json();
      console.log(result)
    }).catch(err=>{
      console.log(err)
    })


  }


getCities=()=>{
   fetch('http://localhost:9597/cities')
   .then(async (res)=>{
    let data=await res.json();

    this.setState((prevState)=>({
      Company:{...prevState.Company},

      sectors:[...prevState.sectors],
      areas:[...prevState.areas],
      distrincts:[...prevState.distrincts],
      cities:data.cities,
      countries:[...prevState.countries],
      employeeCounts:prevState.employeeCounts
    }));
   })
}


getCountries=()=>{
  fetch('http://localhost:9597/countries')
  .then(async (res)=>{
   let data=await res.json();
   this.setState((prevState)=>({
     Company:{...prevState.Company},
     sectors:[...prevState.sectors],
     areas:[...prevState.areas],
     distrincts:[...prevState.distrincts],
     cities:[...prevState.cities],
     countries:data.countries,
     employeeCounts:prevState.employeeCounts
   }));
  })
}


getDistricts=()=>{
  fetch('http://localhost:9597/districts')
  .then(async (res)=>{
   let data=await res.json();
   this.setState((prevState)=>({
     Company:{...prevState.Company},
     sectors:[...prevState.sectors],
     areas:[...prevState.areas],
     distrincts:data.distrincts,
     cities:[...prevState.cities],
     countries:[...prevState.countries],
     employeeCounts:prevState.employeeCounts
   }));
  })
}

getEmployeeCounts=()=>{
  fetch('http://localhost:9597/employeeCounts')
  .then(async (res)=>{
   let data=await res.json();
   console.log(data)
   this.setState((prevState)=>({
     Company:{...prevState.Company},
     sectors:[...prevState.sectors],
     areas:[...prevState.areas],
     distrincts:prevState.distrincts,
     cities:[...prevState.cities],
     countries:[...prevState.countries],
     employeeCounts:data.employeeCounts
   }));
  })
}



 
getCompanyData=()=>{
  fetch('http://localhost:9597/company')
  .then(async (res)=>{
     let data=await res.json();
     this.setState((prevState)=>({
      Company:data.Company,
      sectors:data.sectors,
      areas:data.areas,
      distrincts:[...prevState.distrincts],
      cities:[...prevState.cities],
      countries:[...prevState.countries],
      employeeCounts:data.employeeCounts
    }));
  })
}

removeDetail=(e)=>{
  console.log('rd')
  let areasList=this.state.areas;
  areasList.forEach(x=>{
    if(x.id===e.currentTarget.id){
      x.detail='';
    }
  });
    console.log(areasList)
  this.setState((prevState)=>({
    Company:{...prevState.Company},
    sectors:[...prevState.sectors],
    areas:areasList,
    distrincts:[...prevState.distrincts],
    cities:[...prevState.cities],
    countries:[...prevState.countries],
    employeeCounts:[...prevState.employeeCounts]
  }),()=>{
    this.UpdateonClickHandler();
  });
}





componentDidMount(){
  this.getDistricts();
  this.getCompanyData();
  this.getCities();
  this.getCountries();
  this.getEmployeeCounts();
}

 render(){

  return (
      <companyContext.Provider value={{
        state:this.state,
        onChangeHandlers:{
          directorOnChangeHandler:this.directorOnChangeHandler,
          bdayOnChangeHandler:this.bdayOnChangeHandler,
          voenOnChangeHandler:this.voenOnChangeHandler,
          phoneOnChangeHandler:this.phoneOnChangeHandler,
          districtOnChangeHandler:this.districtOnChangeHandler,
          createdDayOnChangeHandler:this.createdDayOnChangeHandler,
          siteOnChangeHandler:this.siteOnChangeHandler,
          emailOnChangeHandler:this.emailOnChangeHandler,
          cityOnChangeHandler:this.cityOnChangeHandler,
          employeeCountOnChangeHandler:this.employeeCountOnChangeHandler,
          productOnChangeHandler:this.productOnChangeHandler,
          cerificateOnChangeHandler:this.cerificateOnChangeHandler,
          exportCountryOnChangeHandler:this.exportCountryOnChangeHandler,
          brancOnChangeHandler:this.brancOnChangeHandler,
          importOnChangeHandler:this.importOnChangeHandler,
          delegateOnChangeHandler:this.delegateOnChangeHandler,
          detailOnChangeHandler:this.detailOnChangeHandler,
          sectorOnChangeHandler:this.sectorOnChangeHandler
        },
        UpdateonClickHandler:this.UpdateonClickHandler,
        removeDetail:this.removeDetail
      }}>
      {this.props.children}
      </companyContext.Provider>
  )
 }

}

export default CompanyContext
