import React, { PureComponent } from "react";
import { Row, Col, Card, Input, Button, Chip, Preloader } from "react-materialize";
import { Redirect } from "react-router-dom";
import "./login.css";

import { Login } from '../api/login_api';


export default class LoginPage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            error: false,
            loading: false,
            userLoggedIn: false
        };
    }

    onLoginRequest = () => {
        this.setState({ loading: true, error: false });
        //write login method
        Login(this.state.userName, this.state.password).then(data => this.setState({ userLoggedIn: true, loading: false, })).catch(err => this.setState({ userLoggedIn: false, loading: false, error: true }));
    }

    render() {
        const { from } = this.props.location.state || { from: { pathName: "/" } };
        if (this.state.userLoggedIn) {
            this.props.toggleAppLoader();
            return <Redirect to={from} />;
        }
        return (
            <Row s={12}>
                <div className="entry-row">
                    <Col m={4} s={12} offset={"m4"} style={{ position: "absolute", top: "25%" }}>
                        <Card title="Login">
                            <Input
                                s={12}
                                validate
                                label="Username"
                                disabled={this.state.loading}
                                onChange={(e, value) => this.setState({ userName: value })}
                            />
                            <Input
                                s={12}
                                validate
                                type="password"
                                label="Password"
                                disabled={this.state.loading}
                                onKeyDown={event => {
                                    if (event.which === 13) {
                                        this.onLoginRequest();
                                    }
                                }}
                                onChange={(e, value) => this.setState({ password: value })}
                            />
                            {this.state.error && (
                                <div>
                                    <Chip close={true}>Invalid Username/Password</Chip>
                                </div>
                            )}
                            {this.state.loading && <Preloader flashing />}
                            <div className="center-align">
                                <Button disabled={this.state.loading} onClick={this.onLoginRequest}>
                                    {this.state.loading ? "Logging" : "Login"}
                                </Button>
                            </div>
                        </Card>
                    </Col>
                </div>
            </Row>
        );
    }
}
