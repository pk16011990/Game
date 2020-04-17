FROM node:13

USER root

RUN groupmod -g 1001 node \
  && usermod -u 1001 -g 1001 node

# allow overwriting UID and GID o the user "www-data" to help solve issues with permissions in mounted volumes
# if the GID is already in use, we will assign GID 33 instead (33 is the standard uid/gid for "www-data" in Debian)
ARG www_data_uid
ARG www_data_gid
RUN if [ -n "$www_data_uid" ]; then deluser www-data && (addgroup --gid $www_data_gid www-data || addgroup --gid 33 www-data) && adduser --system --home /home/www-data --uid $www_data_uid --disabled-password --group www-data; fi;

# as the UID and GID might have changed, change the ownership of the home directory workdir again
RUN chown -R www-data:www-data /home/www-data

USER www-data
