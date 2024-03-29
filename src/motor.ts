import { Pacientes, NumeroPacientesPorEspecialidad, numeroPacientesPorEspecialidad } from "./modelo";

export const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
	const pacientesAsignadosAPediatria: Pacientes[] = [];
	for (let i = 0; i < pacientes.length; i++) {
		if (pacientes[i].especialidad === "Pediatra") pacientesAsignadosAPediatria.push(pacientes[i]);
	}
	return pacientesAsignadosAPediatria;
};

export const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
	const PacientesAsignadosAPediatriaYMenorDeDiezAnios: Pacientes[] = [];
	for (let i = 0; i < pacientes.length; i++) {
		if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) PacientesAsignadosAPediatriaYMenorDeDiezAnios.push(pacientes[i]);
	}
	return PacientesAsignadosAPediatriaYMenorDeDiezAnios;
};

export const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
	let activarProctolo = false;

	for (let i = 0; i < pacientes.length && !activarProctolo; i++) {
		if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39) {
			activarProctolo = true;
		}
	}

	return activarProctolo;
};

export const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
	const pacientesAMedicoFamilia: Pacientes[] = [];
	for (let i = 0; i < pacientes.length; i++) {
		const pacienteClonado: Pacientes = { ...pacientes[i] };
		pacientesAMedicoFamilia.push(pacienteClonado);
		if (pacienteClonado.especialidad === "Pediatra") pacienteClonado.especialidad = "Medico de familia";
	}
	return pacientesAMedicoFamilia;
};

export const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
	let pediatraLibre = true;

	for (let i = 0; i < pacientes.length && pediatraLibre; i++) {
		if (pacientes[i].especialidad === "Pediatra") {
			pediatraLibre = false;
		}
	}

	return pediatraLibre;
};

export const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
	for (let i = 0; i < pacientes.length; i++) {
		switch (pacientes[i].especialidad) {
			case "Medico de familia":
				numeroPacientesPorEspecialidad.medicoDeFamilia += 1;
				break;
			case "Pediatra":
				numeroPacientesPorEspecialidad.pediatria += 1;
				break;
			case "Cardiólogo":
				numeroPacientesPorEspecialidad.cardiologia += 1;
				break;

			default:
				break;
		}
	}

	return numeroPacientesPorEspecialidad;
};
