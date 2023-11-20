import {useForm} from "react-hook-form";
import { Link } from "react-router-dom";
function RegisterAdministracion (){
    const {register} = useForm();
return(
    <div>
        <form action="">

        <input type="text" name ="Id_admin" />
        <input type="text" name ="nombre" />
        <input type="correo" name ="correo" />
        <input type="password" name ="contraseña" />
        <input type="text" name ="rol" />






        </form>



    </div>
)


}
export default RegisterAdministracion