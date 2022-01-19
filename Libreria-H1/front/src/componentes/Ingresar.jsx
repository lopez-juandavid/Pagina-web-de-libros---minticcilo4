import React from 'react'
import { Form,Button  } from 'react-bootstrap';
import './Styles.css';

export default function Ingresar() {
    return (
            <div className="container mt-4">
            <br />
            <div className="row">
                <div className="col-md-5  mx-auto">
                    <div className="card">
                        <div className="card-header" >
                            <h2 className="text-center ">Bienvenido</h2>

                            <div className="card-body">
                            <Form>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>Número de identificación</Form.Label>
                                <Form.Control type="email" placeholder="Ingrese su número de identificación" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Ingrese su contraseña" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Mantener sesión iniciada" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Iniciar sesión
                            </Button>
                        </Form>
                            </div>
                        </div>



                    </div>

                </div>
            </div>
            <br />
            <br /> 
             
        </div>
        

    )
}
