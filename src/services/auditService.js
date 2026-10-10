import API from './api';

export const createAudit = async (auditData) => {
  const response = await API.post('/audits', auditData);
  return response.data;
};

export const getAuditHistory = async () => {
  const response = await API.get('/audits');
  return response.data;
};

export const getAuditById = async (id) => {
  const response = await API.get(`/audits/${id}`);
  return response.data;
};