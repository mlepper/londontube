# London Tube

Given a list of London Tube stations and lines, write an application to answer the following question:  What stations are N stops from East Ham?  For stations with multiple routes include the station only if the minimum number of stops = N.  Print out the results in alphabetical order.
  
  For example, if N = 5, the complete answer would be:
  
    * Bow Road
    * Dagenham East
    * East India
    * Hackney Wick
    * Leyton
    * Leyton Midland Road
    * Mile End
    * North Greenwich
    * Pudding Mill Lane
    * Royal Victoria
    * Stratford High Street
    * Stratford International
    * West Silvertown
    
  For example, Canning Town from East Ham is possible with 4 or 5 stops, but we only consider it a valid answer for 4 stops, not 5, since we only consider the minimum number of stops.
  
  **Resources**
  * London Tube Map: https://tfl.gov.uk/cdn/static/cms/images/tube-map.gif
  * List of Tube stations: https://www.doogal.co.uk/london_stations.php (select "Download" then "Tube line data CSV" to download a list of stations and their lines)
  
  
 
  # Installation
  
  Requires [node.js](https://nodejs.org/en) (Developed on version 7.8)
  
  Run `npm install` to install dependencies.
  
  # Execution
  
  By default, the search will start at East Ham and use 5 stops

```
    node index.js
```
   
  These params can be overridden using -s for the starting station and -n for number of stops
    
```
    node index.js -s "East Ham" -n 5 
```
  Individual parms can also be supplied.
```
    node index.js -n 16  
```

# Results
Some results for n=5,4,16,30

```
Start -> East Ham ;  Stops -> 5
[ 'Bow Road',
 'Dagenham East',
 'East India',
 'Hackney Wick',
 'Leyton',
 'Leyton Midland Road',
 'Mile End',
 'North Greenwich',
 'Pudding Mill Lane',
 'Royal Victoria',
 'Stratford High Street',
 'Stratford International',
 'West Silvertown' ]

Start -> East Ham ;  Stops -> 4
[ 'Abbey Road',
 'Bromley-by-Bow',
 'Canning Town',
 'Dagenham Heathway',
 'Leytonstone High Road',
 'Star Lane',
 'Stratford' ]

Start -> East Ham ;  Stops -> 16
[ 'Archway',
 'Balham',
 'Bayswater',
 'Brondesbury',
 'Earls Court',
 'Hampstead',
 'High Street Kensington',
 'Kensal Green',
 'Kilburn',
 'Kilburn Park',
 'Kingsbury',
 'Lewisham',
 'Neasden',
 'Norwood Junction',
 'Notting Hill Gate',
 'Preston Road',
 'Roding Valley',
 'Royal Oak',
 'Southgate',
 'Warwick Avenue',
 'West Brompton' ]

Start -> East Ham ;  Stops -> 30
[ 'Beckenham Junction',
 'Heathrow Terminal 5',
 'Watford Junction' ]
 ```