import React from 'react';
import TextField from '@material-ui/core/TextField';

function withFilter(Component: any, options: IOptions) {


  function WrappedComponent(props: any) {
    const collection = props[options.keyCollection];
    const newCollection = collection.filter(options.criteria);
    const newProps = { ...props };

    newProps[options.keyCollection] = newCollection;

    return (
      <section className="withFilter">
        <TextField />
        <Component {...newProps} />
      </section>
    )
  }

  return WrappedComponent;
}

interface IOptions {
  keyCollection: string,
  criteria: (item: any, index: number) => boolean
}

export default withFilter;