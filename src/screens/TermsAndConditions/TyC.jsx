import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function TyC() {
  return (
    <div className="flex flex-col justify-center items-center p-4 gap-4">
      <article className="flex flex-col justify-center gap-4 w-7/12 ">
        <Link to="/registro" className="w-full">
          <Button variant="text" className="w-full">
            {"<"} Regresar a Limo
          </Button>
        </Link>
        <h1 className="text-2xl underline font-bold">
          TÉRMINOS Y CONDICIONES DE USO DE LIMO
        </h1>
        <section className=" flex flex-col gap-2">
          <p>
            Bienvenido a LIMO, una plataforma digital que permite la gestión y
            solicitud de servicios de impresión en línea. Antes de utilizar
            nuestra aplicación, te invitamos a revisar detenidamente los
            siguientes términos y condiciones que regulan tu uso de nuestros
            servicios. Al acceder y utilizar la aplicación LIMO, aceptas y te
            comprometes a cumplir con estos términos y condiciones.
          </p>
        </section>

        <section className=" flex flex-col gap-2">
          <h2 className="underline font-bold">1. Condiciones de Uso:</h2>
          <p>
            1.1. LIMO es propiedad de LIMO S.A.S, con domicilio en Cochabamba
            2973, Guaymallén, Mendoza, Argentina.
          </p>
          <p>
            1.2. Al utilizar LIMO, aceptas cumplir con todas las leyes y
            regulaciones aplicables en Argentina.
          </p>
        </section>
        <section className=" flex flex-col gap-2">
          <h2 className="underline font-bold">2. Registro y Cuenta:</h2>
          <p>
            2.1. Para utilizar los servicios de LIMO, es posible que necesites
            registrarte y crear una cuenta. Debes proporcionar información
            precisa y actualizada durante el proceso de registro.
          </p>
          <p>
            2.2. Eres responsable de mantener la confidencialidad de tu
            contraseña y de todas las actividades que ocurran bajo tu cuenta
          </p>
        </section>
        {/* 3 */}
        <section className=" flex flex-col gap-2">
          <h2 className="underline font-bold">3. Uso de la Aplicación:</h2>
          <p>
            3.1. Al utilizar LIMO, te comprometes a no realizar actividades que
            puedan dañar, interferir o comprometer la seguridad de la
            aplicación.
          </p>
          <p>
            3.2. No debes utilizar LIMO de manera fraudulenta o para cualquier
            propósito ilegal o no autorizado.
          </p>
          <p>
            3.3 Al crear una cuenta en LIMO, los usuarios deben proporcionar su
            nombre completo, dirección de correo electrónico, número de teléfono
            y dirección de entrega de las copias. No se recopilan datos de
            tarjetas de crédito u otros métodos de pago, ya que el pago se
            realiza a través de la API de Mercado Pago.
          </p>
          <p>
            3.4 LIMO no recopila datos adicionales de los usuarios más allá de
            la información mencionada anteriormente.
          </p>
          <p>
            3.5 LIMO utiliza la dirección de correo electrónico proporcionada
            por los usuarios para enviar promociones, noticias y encuestas sobre
            la experiencia del usuario.
          </p>
          <p>
            3.6 LIMO comparte la información del usuario, incluyendo nombre
            completo, número de teléfono y dirección de entrega, con la empresa
            de mensajería para coordinar la entrega de las copias solicitadas
          </p>
          <p>
            3.7 Si te arrepientes de tu compra, la opción de arrepentimiento
            estará disponible vía WhatsApp. Deberás comunicarte al número de
            atención al cliente de LIMO
          </p>
        </section>
        {/* 4 */}
        <section className=" flex flex-col gap-2">
          <h2 className="underline font-bold">
            4. Contenido y Propiedad Intelectual:
          </h2>
          <p>
            4.1. Todo el contenido disponible en LIMO, incluidos textos,
            gráficos, logotipos, imágenes y software, está protegido por
            derechos de autor y otros derechos de propiedad intelectual.
          </p>
          <p>
            4.2. No puedes utilizar, copiar, modificar, distribuir o reproducir
            ningún contenido de LIMO sin el consentimiento previo por escrito de
            LIMO S.A.S.
          </p>
          <p>
            4.3. Todo el contenido disponible en LIMO, incluyendo textos,
            gráficos, logotipos, imágenes y software, está protegido por
            derechos de autor y otros derechos de propiedad intelectual.
          </p>
          <p>
            4.4. LIMO no analiza ni verifica los archivos que los usuarios
            cargan en el sistema para imprimir. Por lo tanto, los usuarios son
            los únicos responsables de garantizar que tienen los derechos
            necesarios sobre el contenido que suben y que no están infringiendo
            los derechos de autor, patentes u otros derechos de propiedad de
            terceros.
          </p>
          <p>
            4.5. LIMO no se hace responsable de ninguna violación de derechos de
            autor, patentes u otros derechos de propiedad intelectual que puedan
            surgir del contenido proporcionado por los usuarios.
          </p>
          <p>
            4.6. En caso de que se presente una reclamación o disputa
            relacionada con los derechos de autor, patentes u otros derechos de
            propiedad intelectual, el usuario que haya proporcionado el
            contenido será el único responsable y se compromete a indemnizar y
            eximir de responsabilidad a LIMO por cualquier daño, pérdida o gasto
            que surja de dicha reclamación o disputa.
          </p>
        </section>
        {/* 5 */}
        <section className=" flex flex-col gap-2">
          <h2 className="underline font-bold">
            5. Responsabilidad del Usuario:
          </h2>
          <p>
            5.1. Eres responsable de cualquier contenido que envíes o cargues a
            LIMO, incluidos archivos, imágenes y mensajes.
          </p>
          <p>
            5.2. LIMO no se hace responsable de cualquier pérdida, daño o
            perjuicio resultante del uso de la aplicación o de cualquier
            contenido proporcionado por los usuarios.
          </p>
        </section>
        {/* 6 */}
        <section className=" flex flex-col gap-2">
          <h2 className="underline font-bold">
            6. Modificaciones y Terminación:
          </h2>
          <p>
            6.1. LIMO se reserva el derecho de modificar o interrumpir la
            aplicación en cualquier momento, sin previo aviso.
          </p>
          <p>
            6.2. Podemos suspender o terminar tu acceso a LIMO si violas estos
            términos y condiciones o si consideramos que tu uso de la aplicación
            es perjudicial para otros usuarios o para nosotros.
          </p>
        </section>
        {/* 7 */}
        <section className=" flex flex-col gap-2">
          <h2 className="underline font-bold">
            7. Ley Aplicable y Jurisdicción:
          </h2>
          <p>
            7.1. Estos términos y condiciones se rigen por las leyes de la
            República Argentina.
          </p>
          <p>
            7.2. Cualquier disputa relacionada con estos términos y condiciones
            estará sujeta a la jurisdicción exclusiva de los tribunales de la
            Ciudad de Mendoza, Argentina.
          </p>
        </section>
        <h3 className="italic">
          Al utilizar LIMO, aceptas estos términos y condiciones en su
          totalidad. Si no estás de acuerdo con alguno de estos términos, te
          recomendamos que no utilices nuestra aplicación.
        </h3>
        <Link to="/registro" className="w-full">
          <Button variant="contained" className="w-full">
            Regresar a Limo
          </Button>
        </Link>
      </article>
    </div>
  );
}
