import { CountryResultList } from '../CountryResultList/CountryResultList'
import * as React from 'react'
import { getData } from '../../mocks/getData'

export const ResultList = () => {
  const data = getData()
  return (
    <>
      {data.map((offer, index) => {
        console.log({ offer })
        return (
          <CountryResultList
            cityNumber={index + 1}
            key={index + 1}
            city={offer.city}
            country={offer.country}
            weatherAndFlight={offer.weatherAndFlight}
            defaultItemsToShow={5}
          />
        )
      })}
    </>
  )
}
