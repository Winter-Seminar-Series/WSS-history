import { fetchJson } from '../fetch';
import type { StaffTeam } from '../../types';

export async function fetchStaffTeams() {
  const url = `${process.env.API_ORIGIN}/api/staff/3/`;
  return await fetchJson<[StaffTeam]>(url);
}

export async function fetchStaffs() {
  const staffTeams = await fetchStaffTeams();
  return staffTeams.flatMap((staffTeam) =>
    staffTeam.members.map((member) => ({
      ...member.staff,
      team: staffTeam.name,
    })),
  );
}
