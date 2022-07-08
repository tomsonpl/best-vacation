import { CountryResultList } from '../CountryResultList/CountryResultList'
import * as React from 'react'
import { WeatherResponse } from '../../mocks/types'

interface IProps {
  data: WeatherResponse[]
}
export const ResultList = ({ data }: IProps) => {
  return (
    <>
      {data.map((offer, index) => {
        return (
          <CountryResultList
            cityNumber={index + 1}
            key={index + 1}
            city={offer.city_name}
            country={offer.timezone}
            weatherAndFlight={offer.data}
            defaultItemsToShow={5}
          />
        )
      })}
    </>
  )
}
