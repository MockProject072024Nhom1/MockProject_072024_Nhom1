# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Dayoff(models.Model):
    bgid = models.OneToOneField('Bodyguard', models.DO_NOTHING, db_column='BGId', primary_key=True)  # Field name made lowercase.
    day = models.DateField(db_column='Day')  # Field name made lowercase.
    time = models.TimeField(db_column='Time')  # Field name made lowercase.
    subject = models.CharField(db_column='Subject', max_length=255, db_collation='SQL_Latin1_General_CP1_CI_AS')  # Field name made lowercase.
    reason = models.CharField(db_column='Reason', max_length=255, db_collation='SQL_Latin1_General_CP1_CI_AS')  # Field name made lowercase.
    status = models.IntegerField(db_column='Status')  # Field name made lowercase.

    class Meta:
        db_table = 'DAYOFF'


class Timekeeping(models.Model):
    bgid = models.OneToOneField('Bodyguard', models.DO_NOTHING, db_column='BGId', primary_key=True)  # Field name made lowercase. The composite primary key (BGId, ContractId) found, that is not supported. The first column is selected.
    contractid = models.ForeignKey('Contract', models.DO_NOTHING, db_column='ContractId')  # Field name made lowercase.
    timein = models.DateTimeField(db_column='TimeIn', blank=True, null=True)  # Field name made lowercase.
    timeout = models.DateTimeField(db_column='TimeOut', blank=True, null=True)  # Field name made lowercase.
    starttime = models.DateTimeField(db_column='StartTime', blank=True, null=True)  # Field name made lowercase.
    endtime = models.DateTimeField(db_column='EndTime', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'TIMEKEEPING'
        unique_together = (('bgid', 'contractid'),)
