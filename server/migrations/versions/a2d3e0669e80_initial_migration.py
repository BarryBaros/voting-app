"""Initial migration

Revision ID: a2d3e0669e80
Revises: 2cea6873a51e
Create Date: 2024-09-10 21:22:36.117980

"""
# migration script
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a2d3e0669e80'
down_revision = '2cea6873a51e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('vote', schema=None) as batch_op:
        batch_op.add_column(sa.Column('voter_id', sa.Integer(), nullable=False))
        batch_op.alter_column('candidate_id',
               existing_type=sa.INTEGER(),
               nullable=False)
        batch_op.drop_constraint('fk_vote_Voter_id', 'vote', type_='foreignkey')
        batch_op.create_foreign_key('fk_vote_voter', 'vote', 'voter', ['voter_id'], ['id'])
        batch_op.drop_column('Voter_id')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('vote', schema=None) as batch_op:
        batch_op.add_column(sa.Column('Voter_id', sa.INTEGER(), nullable=True))
        batch_op.drop_constraint('fk_vote_voter', 'vote', type_='foreignkey')
        batch_op.create_foreign_key('fk_vote_Voter_id', 'vote', 'voter', ['Voter_id'], ['id'])
        batch_op.alter_column('candidate_id',
               existing_type=sa.INTEGER(),
               nullable=True)
        batch_op.drop_column('voter_id')

    # ### end Alembic commands ###