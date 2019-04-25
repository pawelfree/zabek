var auth = require('../middleware/auth');
var express = require('express');
var router = express.Router();

examinations = [
  {
    _id: '12345',
    patient: {
      _id: '23456',
      name: 'Maciej',
      lastName: 'Skórzynski'
    },
    examinationDate: '01-05-2019',
    physician: {
      _id: '12345',
      name: 'Pawel',
      lastName: 'Dudek'
    },
    technician: {
      _id: '12345'
    },
    diagnosis: 'złamana 4 u podstawy',
    xrays: [
      'sciezka_do_pliku_np_w_aws_albo_gcs_albo_azure_1',
      'sciezka_do_pliku_np_w_aws_albo_gcs_albo_azure_2',
      'sciezka_do_pliku_np_w_aws_albo_gcs_albo_azure_3'
    ]
  },
  {
    _id: '12345',
    patient: {
      _id: '23456',
      name: 'Maciej',
      lastName: 'Skórzynski'
    },
    examinationDate: '01-05-2019',
    physician: {
      _id: '12345',
      name: 'Pawel',
      lastName: 'Dudek'
    },
    technician: {
      _id: '12345'
    },
    diagnosis: 'wygięty kręgosłup moralny',
    xrays: ['sciezka_do_pliku_np_w_aws_albo_gcs_albo_azure_1']
  }
];

router.get('/', auth, (req, res) => {
  res.send(examinations);
});

module.exports = router;
