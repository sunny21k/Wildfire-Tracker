import React from 'react'
import { Icon } from '@iconify/react'
import LocationIcon from '@iconify/icons-mdi/fire-alert'

export const Header = () => {
  return (
    <header className='header'>
        <h1><Icon icon={LocationIcon}/> Wildfire Tracker (Powered by NASA)</h1>
    </header>
  )
}
