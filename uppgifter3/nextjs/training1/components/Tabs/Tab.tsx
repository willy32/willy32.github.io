import React from 'react'

type TabProps = {
    children: any
    label: string
};

const Tab:React.FC<TabProps> = ({children}: TabProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Tab