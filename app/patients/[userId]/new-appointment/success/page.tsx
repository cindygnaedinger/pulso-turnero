import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as Sentry from "@sentry/nextjs";
import { getUser } from "@/lib/actions/patient.actions";

const Success = async ({
  params: { userId },
  searchParams,
}: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);

  const doctor = Doctors.find(
    (doc) => doc.name === appointment.primaryPhysician
  );
  const user = await getUser(userId);

  Sentry.metrics.set("user_view_appointment-success", user.name);
  return (
    <section className="custom-scrollbar container">
      <div className="flex h-screen max-h-screen px-[5%]">
        <div className="success-img">
          <Link href="/">
            <Image
              src="/assets/icons/logo-full.svg"
              height={1000}
              width={1000}
              alt="logo"
              className="h-10 w-fit"
            />
          </Link>
          <section className="flex flex-col items-center">
            <Image
              src="/assets/gifs/success.gif"
              height={300}
              width={280}
              alt="success"
            />
            <h2 className="header mb-6 max-w-[600px] text-center">
              ¡Tu{" "}
              <span className="text-green-500">
                solicitud para un nuevo turno
              </span>{" "}
              se envió correctamente!
            </h2>
            <p>Nos pondremos en contacto con vos en breve para confirmar.</p>
          </section>
          <section className="request-details">
            <p>Información del turno solicitado:</p>
            <div className="flex items-center gap-3">
              <Image
                src={doctor?.image!}
                alt="doctor"
                height={100}
                width={100}
                className="size-6"
              />
              <p className="whitespace-nowrap">Dr/a. {doctor?.name}</p>
            </div>
            <div className="flex gap-2">
              <Image
                src="/assets/icons/calendar.svg"
                height={24}
                width={24}
                alt="calendar"
              />
              <p>{formatDateTime(appointment.schedule).dateTime}</p>
            </div>
          </section>
          <Button variant="outline" className="shad-primary-btn" asChild>
            <Link href={`/patients/${userId}/new-appointment`}>
              Nuevo turno
            </Link>
          </Button>
          <p className="copyright py-12">© 2024 Pulso</p>
        </div>
      </div>
    </section>
  );
};

export default Success;
