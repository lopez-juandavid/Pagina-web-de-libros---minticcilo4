import React from 'react'
import {  } from 'react-bootstrap';
import './Styles.css';


export default function RegistrarUsuario() {
    return (
        <div className="container mt-4">
            <br />
            <div className="row">
            <div className="col-md-7  mx-auto">
                <div className="card">
                <div className="container text-center fa-5x">
                    <i className="fas fa-user-plus"></i>
                </div>
                <div class="header-titulos">
                    <div className="card-header text-center">
                        <h4>Registrar Usuario</h4>
                    </div>
                </div>
                
                <div className="card-body">
                    <form onSubmit={"guardar"}>
                    <div className="row">
                        <div className="col-md-6">
                        <label>Nombres</label>
                        <input type="text" className="form-control required" />
                        </div>

                        <div className="col-md-6">
                        <label>Apellidos</label>
                        <input type="text" className="form-control required" />
                        </div>

                        <div className="col-md-6">
                        <label>Cédula</label>
                        <input type="text" className="form-control required" />
                        </div>

                        <div className="col-md-6">
                        <label>Correo Electrónico</label>
                        <input type="text" className="form-control required" />
                        </div>

                        <div className="col-md-6">
                        <label>Contraseña</label>
                        <input type="text" className="form-control required" />
                        </div>


                    </div>
                    <br />

                    <button type="submit" class="btn btn-primary">
                        <span class="fa fa-save"></span> Guardar
                    </button>
                    </form>
                </div>
                </div>
            </div>
            </div>
            <br />
            <br />
        </div>
    )
}
