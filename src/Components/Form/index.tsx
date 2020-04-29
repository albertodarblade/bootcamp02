import React, { MouseEvent } from 'react';
import Button from '@material-ui/core/Button';

// Validacion facil de implementar next components. 
// Valores almacenados en un stado.
// Same look and feel for all forms in the web app. UX/UI
// error handling

function Form({ actions, children, isValid }: IProps) {
  return (
    <form className="formCmpt">
      {children}
      <div className="actions">
        {actions.map(action => {
          const color = action.primary ? 'primary' : 'default';
          return (
            <Button variant="contained"
              color={color}
              type="button"
              disabled={action.primary && !isValid}
              onClick={action.onClick}> {action.text} </Button>
          )})}
      </div>
    </form>
  )
}

interface IAction {
  text: string,
  onClick: (event: MouseEvent<HTMLButtonElement>) => void,
  primary? : boolean
}

interface IProps {
  actions: IAction[],
  children: any,
  isValid?: boolean
}

export default Form;