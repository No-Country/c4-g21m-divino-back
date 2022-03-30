const {Schema, model}= require ('mongoose');

const usuariosSchema = Schema({
    nombre :{
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required :[true, 'El correo es obligatorio'],
        unique : true
    },
    password: {
        type: String,
        required :[true, 'El password es obligatorio'],
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required :true,
        emun:['ADMIN_ROL','USER_ROL'],
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },

})

usuariosSchema.methods.toJSON = function(){
    const {__v,password, _id, ... usuario }=this.toObject();
    usuario.uid=_id;
    return usuario;

}


module.exports= model('Usuario',usuariosSchema);