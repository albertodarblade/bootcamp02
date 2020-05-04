import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import './styles.css'
function withFilter(Component: any, options: IOptions) {


  function WrappedComponent(props: any) {
    const [inputFilter, setInputFilter]= useState('');
    const collection = props[options.keyCollection];
    const newCollection = collection.filter(options.criteria(inputFilter));
    const newProps = { ...props };

    newProps[options.keyCollection] = newCollection;

    return (
      <section className="withFilter">
        <TextField className="inputFilter"
        value={inputFilter}
          onChange={ event => setInputFilter(event.target.value)}
        />
        <Component {...newProps} />
      </section>
    )
  }

  return WrappedComponent;
}

interface IOptions {
  keyCollection: string,
  criteria: (test:string) =>( ( item:any ) => any ) 
}

export default withFilter;