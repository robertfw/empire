"use strict";

var ReportModel = function(options) {
  this.id = options.id || null;
  this.title = options.title || null;
  this.number = options.number || null;
  this.sequence_number = options.sequence_number || null;
  this.suffix = options.suffix || null;
  this.entity_id = options.entity_id || null;
  this.reporttype_id = options.reporttype_id || null;
  this.created_at = options.created_at || null;
  this.updated_at = options.updated_at || null;
  this.issued_at = options.issued_at || null;
  this.year = options.year || null;

  this.files = options.files || [];
  this.authors = options.authors || [];
  this.keywords = options.keywords || [];
  this.msmapperprojects = options.msmapperprojects || [];
  this.workorders = options.workorders || [];
  this.comments = options.comments || [];
  this.clients = options.clients || [];
};

module.exports = ReportModel;
