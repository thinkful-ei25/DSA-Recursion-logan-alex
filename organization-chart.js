'use strict';

const organizations = [
  {id: 'Zuckerberg', parent: null}, 
  {id: 'Schroepfer', parent: 'Zuckerberg'}, 
  {id: 'Bosworth', parent: 'Schroepfer'}, 
  {id: 'Steve', parent: 'Bosworth'}, 
  {id: 'Kyle', parent: 'Bosworth'}, 
  {id: 'Andra', parent: 'Bosworth'}, 
  {id: 'Zhao', parent: 'Schroepfer'}, 
  {id: 'Richie', parent: 'Zhao'}, 
  {id: 'Sofia', parent: 'Zhao'}, 
  {id: 'Jen', parent: 'Zhao'}, 
  {id: 'Schrage', parent: 'Zuckerberg'}, 
  {id: 'VanDyck', parent: 'Schrage'}, 
  {id: 'Sabrina', parent: 'VanDyck'}, 
  {id: 'Michelle', parent: 'VanDyck'}, 
  {id: 'Josh', parent: 'VanDyck'}, 
  {id: 'Swain', parent: 'Schrage'}, 
  {id: 'Blanch', parent: 'Swain'}, 
  {id: 'Tom', parent: 'Swain'}, 
  {id: 'Joe', parent: 'Swain'}, 
  {id: 'Sandberg', parent: 'Zuckerberg'}, 
  {id: 'Goler', parent: 'Sandberg'}, 
  {id: 'Annie', parent: 'Goler'}, 
  {id: 'Julie', parent: 'Goler'}, 
  {id: 'Eddie', parent: 'Goler'}, 
  {id: 'Hernandez', parent: 'Sandberg'}, 
  {id: 'Morgan', parent: 'Hernandez'}, 
  {id: 'Inga', parent: 'Hernandez'}, 
  {id: 'Rowi', parent: 'Hernandez'}, 
  {id: 'Moissinac', parent: 'Sandberg'}, 
  {id: 'Amy', parent: 'Moissinac'}, 
  {id: 'Vinni', parent: 'Moissinac'}, 
  {id: 'Chuck', parent: 'Moissinac'}, 
  {id: 'Kelley', parent: 'Sandberg'}, 
  {id: 'Ana', parent: 'Kelley'}, 
  {id: 'Wes', parent: 'Kelley'},
  {id: 'Eric', parent: 'Kelley'}
];


function orgChart(organizations, parent) {
  let heirarchy = {};
  organizations.filter(org => org.parent === parent)
               .forEach(org => heirarchy[org.id] = orgChart(orgChart, org.id));
  return heirarchy;
}

console.log(orgChart(organizations, null));
