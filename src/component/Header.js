import React, { useContext } from 'react';
import { appContext } from './Layout';
import Link from 'next/link'

const Header = () => {
  const headerContext = useContext(appContext);
  const headerMenus = headerContext.data.HeaderItems.edges;

    return (
        <div className='menuArea'>
          <ul>
              {
                headerMenus.map( (menuItem)=>{
                  return(
                    
                    <li key={menuItem.node.id}>
                          <Link href={menuItem.node.path}>
                              <a>{menuItem.node.label}</a>
                          </Link> 
                    </li>
                    
                  )
                })
              }
            </ul>
        </div>
    );

};



export default Header;


