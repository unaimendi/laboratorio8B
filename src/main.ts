import { obtenPacientesAsignadosAPediatria, obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios, activarProtocoloUrgencia, reasignaPacientesAMedicoFamilia, HayPacientesDePediatria, cuentaPacientesPorEspecialidad } from "./motor";
import { pacientes } from "./modelo";

console.log(obtenPacientesAsignadosAPediatria(pacientes));
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));
console.log(activarProtocoloUrgencia(pacientes));
console.log(reasignaPacientesAMedicoFamilia(pacientes));
console.log(HayPacientesDePediatria(pacientes));
console.log(cuentaPacientesPorEspecialidad(pacientes));
