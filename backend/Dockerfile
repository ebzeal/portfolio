FROM public.ecr.aws/lambda/python:3.12

COPY requirements.txt ${LAMBDA_TASK_ROOT}/requirements.txt
RUN pip install --no-cache-dir -r ${LAMBDA_TASK_ROOT}/requirements.txt

COPY server.py lambda_handler.py context.py resources.py ${LAMBDA_TASK_ROOT}/
COPY data ${LAMBDA_TASK_ROOT}/data

CMD ["lambda_handler.handler"]
